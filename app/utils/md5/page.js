'use client';
import Script from 'next/script';
import { useCallback, useRef, useState } from 'react';
import formatBytes from '@/utils/formatBytes.js';

export default function Page() {
  const inputRef = useRef(null);
  const [fileData, setFileData] = useState({});
  const [fileMd5, setFileMd5] = useState('');

  const handleFileSliceToSparkMD5 = async (file) => {
    const chunkSize = 2 * 1024 * 1024; // Read in chunks of 2MB
    const chunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0;
    const blobSlice = File.prototype.slice;
    // eslint-disable-next-line
    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();
    fileReader.onerror = () => console.log('Oops, something went wrong.');
    fileReader.onload = (e) => {
      console.log('Read chunk', currentChunk + 1, 'of', chunks);
      spark.append(e.target.result); // Append array buffer
      currentChunk++;
      if (currentChunk < chunks) {
        readFile();
      } else {
        // File upload completed
        const computedMd5 = spark.end();
        console.log('Computed hash', computedMd5);
        setFileMd5(computedMd5);
      }
    };
    const readFile = () => {
      const start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    };
    readFile();
  };

  // const handleFileToSparkMD5 = (file) => {
  //   // eslint-disable-next-line
  //   const spark = new SparkMD5.ArrayBuffer();
  //   const fileReader = new FileReader();
  //   fileReader.readAsArrayBuffer(file);
  //   fileReader.onload = (e) => {
  //     spark.append(e.target.result); // Append array buffer
  //     const computedMd5 = spark.end();
  //     console.log('Computed hash', computedMd5);
  //     setFileMd5(computedMd5);
  //   };
  //   fileReader.onerror = () => console.log('Oops, something went wrong.');
  // };

  const handleOnChange = useCallback(() => {
    console.log('handleOnChange', inputRef.current.files[0]);
    const file = inputRef.current.files[0];
    if (!file) {
      console.log('Clear file...');
      return setFileMd5('');
    }

    setFileData({ name: file.name, size: file.size, type: file.type });
    // handleFileToSparkMD5(file);
    handleFileSliceToSparkMD5(file);
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.2/spark-md5.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Script on load');
        }}
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
      />
      <div className="relative mx-auto my-0 max-w-xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
        <input type="file" ref={inputRef} onChange={handleOnChange} />
        <section className="mt-8">
          {fileMd5 && (
            <div className="border border-orange-300 p-4 text-left">
              <div>
                <div>
                  <div className="flex flex-row">
                    <div className="w-24">File Name:</div>
                    <div>{fileData?.name}</div>
                  </div>
                  <div className="flex flex-row">
                    <div className="w-24">File Type:</div>
                    <div>{fileData?.type}</div>
                  </div>
                  <div className="flex flex-row">
                    <div className="w-24">File Size:</div>
                    <div>{formatBytes(fileData?.size)}</div>
                  </div>
                  <div className="mt-4 flex flex-row flex-wrap">
                    <div className="w-36">Computed Hash:</div>
                    <div className="break-all">{fileMd5}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

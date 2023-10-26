import { NextResponse } from 'next/server';

export async function GET(request, context) {
  const { slug, text } = context.params;
  if (text && slug === 'btoa') {
    const encodeddata = Buffer.from(text).toString('base64');
    return new NextResponse(encodeddata);
  } else if (text && slug === 'atob') {
    const decodedData = Buffer.from(text, 'base64').toString();
    return new NextResponse(decodedData);
  }
  return NextResponse.redirect(`${request.nextUrl.origin}/tools/base64`);
}

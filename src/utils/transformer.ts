/* eslint-disable max-len */
import * as YouTubeTransformer from '../../submodules/gatsby-remark-embedder/src/transformers/YouTube'

export const getHTML = (url: string): string => {
  if (YouTubeTransformer.shouldTransform(url)) {
    const iframeSrc = YouTubeTransformer.getYouTubeIFrameSrc(url)
    return getYouTubeHTML(iframeSrc)
  } else {
    return ''
  }
}

export const getYouTubeHTML = (iframeSrc: string): string => {
  return `
    <div
      style="
        position: relative;
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
      "
    >
      <iframe
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        "
        src="${iframeSrc}"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe
      >
    </div>
  `
}

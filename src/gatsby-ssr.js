import React from "react"

exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  if (process.env.NODE_ENV === `production`) {
    //前置脚本
    const tongjiPre = (
      <script
        key={`gatsby-plugin-baidu-tongji-pre`}
        dangerouslySetInnerHTML={{
          __html: `
var _hmt = _hmt || [];
// _hmt.push(['_setAccount', '${pluginOptions.siteid}']);
`
        }}
			/>
		)
 
		const tongji = (
      <script
        key={`gatsby-plugin-baidu-tongji`}
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?${pluginOptions.siteid}";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`
        }}
			/>
		)

		if (pluginOptions.head) {
			setHeadComponents([tongjiPre, tongji])
    } else {
			setHeadComponents([tongjiPre])
			setPostBodyComponents([tongji])
		}
  }
}

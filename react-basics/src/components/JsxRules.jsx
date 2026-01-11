import React from 'react'

const JsxRules = () => {
  return (
    <div>
        <h1>JSX RULES: </h1>
        <ul>
        <li>JSX must return a single parent element.</li>
        <li>JSX elements must be properly closed.</li>
        <li>JSX attributes are written using camelCase.</li>
        <li>`class` attribute is written as `className` in JSX.</li>
        <li>`for` is written as `htmlFor`.</li>
        <li>Expressions in curly brackets: {"{2 + 2}"} which gives {2+2}</li>
        <li>Fragments can be used instead of div: &lt;&gt;...&lt;/&gt;.</li>
        <li>Boolean attributes are written like: disabled={"{true}"}.</li>
        <li>JSX prevents injection attacks by escaping values.</li>
      </ul>
    </div>
  )
}

export default JsxRules
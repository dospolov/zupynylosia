import React from 'react'
import { Avatar } from 'antd'

export default ({ patron, fontSize, visibility }) => (
  <span
    className="patron"
    style={{
      visibility,
      fontSize: `${fontSize}rem`,
      margin: `${fontSize / 10}rem`,
      padding: `${fontSize / 5}rem ${fontSize / 2}rem`
    }}
  >
    <Avatar size={fontSize * 10}>{patron}</Avatar> {patron}
  </span>
)

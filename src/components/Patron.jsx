import React from 'react'
import { Avatar } from 'antd'

export default ({ folder, patron, fontSize, visibility }) => (
  <span
    className="patron"
    style={{
      visibility,
      fontSize: `${fontSize}rem`,
      margin: `${fontSize / 10}rem`,
      padding: `${fontSize / 5}rem ${fontSize / 2}rem`
    }}
  >
    <Avatar size={fontSize * 12} src={`avatars/${folder}/${patron}`}>
      {patron.replace(/\.jpg|\.png/gi, '')}
    </Avatar>{' '}
    {patron.replace(/\.jpg|\.png/gi, '')}
  </span>
)

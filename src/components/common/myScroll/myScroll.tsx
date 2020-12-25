import React from 'react'
import Scrollbars, { ScrollbarProps } from 'react-scrollbars-custom'

interface MyScrollProps extends ScrollbarProps {
  scrollbarEnabled?: boolean
  innerRef?: React.RefObject<Scrollbars>
  noScrollX?: boolean
  noScrollY?: boolean
  translateContentSizeYToHolder?: boolean
}

const MyScroll = React.memo<MyScrollProps>((props) => {
  const { scrollbarEnabled, innerRef, noScrollX, noScrollY, translateContentSizeYToHolder, ...scrollbarProps } = props
  return !props.scrollbarEnabled ? (
    <>{props.children}</>
  ) : (
    <Scrollbars
      translateContentSizeYToHolder={translateContentSizeYToHolder}
      noScrollX={noScrollX}
      noScrollY={noScrollY}
      {...scrollbarProps}
      ref={innerRef as any}
    />
  )
})
// @ts-ignore
MyScroll.defaultProps = {
  scrollbarEnabled: true,
  noScrollX: true,
  noScrollY: false,
  translateContentSizeYToHolder: false,
}
export default MyScroll

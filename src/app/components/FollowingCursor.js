  import React, { useEffect, useRef, useState } from "react"

  const lerp = (start, end, t) => {
    return start + (end - start) * t
  }

  const FollowingCursor = () => {
    const cursorRef = useRef(null)
    const innerRef = useRef(null)
    const requestRef = useRef()
    const cursorPositionRef = useRef({ x: 0, y: 0 })
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
      cursorPositionRef.current = { x: e.clientX, y: e.clientY }
      if (e.target.tagName === "H2" || e.target.id === "home" || e.target.id === "icon") {
        cursorRef.current.style.height = "50px"
        cursorRef.current.style.width = "50px"
        innerRef.current.style.height = "30px"
        innerRef.current.style.width = "30px"
        innerRef.current.style.opacity = "100%"
      } else {
        cursorRef.current.style.height = "40px"
        cursorRef.current.style.width = "40px"
        innerRef.current.style.height = "0px"
        innerRef.current.style.width = "0px"
        innerRef.current.style.opacity = "0%"
      }
    }

    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, [])

    const animate = () => {
      setCurrentPosition((prev) => ({
        x: lerp(prev.x, cursorPositionRef.current.x, 1),
        y: lerp(prev.y, cursorPositionRef.current.y, 1),
      }))

      requestRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(requestRef.current)
    }, [])

    return (
      <div className='hidden lg:block'>
        <div
          ref={cursorRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "#333333",
            border: "0.5px solid #eeeeee",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            left: `${currentPosition.x}px`,
            top: `${currentPosition.y}px`,
            transition: "width 0.3s ease, height 0.3s ease-out",
            zIndex: '999',
            opacity: "80%"
          }}
        >
          <div
            style={{
              opacity: "30%",
              width: "0px",
              height: "0px",
              borderRadius: "50%",
              backgroundColor: "#eeeeee",
              pointerEvents: "none",
              transition:
                "width 0.3s ease, height 0.3s ease-out, opacity 0.3s ease",
              zIndex: '-1',
            }}
            ref={innerRef}
          ></div>
        </div>
      </div>
    )
  }

  export default FollowingCursor

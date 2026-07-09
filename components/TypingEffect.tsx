'use client'

import { useState, useEffect } from 'react'

interface TextSegment {
  text: string
  color?: string
  bold?: boolean
}

interface TypingEffectProps {
  texts: TextSegment[][]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypingEffect({ 
  texts, 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  pauseDuration = 2000 
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState<TextSegment[]>([])
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [segmentIndex, setSegmentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const currentText = texts[textIndex]
    if (!currentText || currentText.length === 0) return

    const currentSegment = currentText[segmentIndex]
    if (!currentSegment) return

    const fullText = currentSegment.text

    if (!isDeleting && charIndex < fullText.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        const newDisplayed = [...displayedText]
        if (newDisplayed[segmentIndex]) {
          newDisplayed[segmentIndex] = {
            ...newDisplayed[segmentIndex],
            text: fullText.slice(0, charIndex + 1)
          }
        } else {
          newDisplayed[segmentIndex] = {
            text: fullText.slice(0, charIndex + 1),
            color: currentSegment.color,
            bold: currentSegment.bold
          }
        }
        setDisplayedText(newDisplayed)
        setCharIndex(charIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } 
    
    if (!isDeleting && charIndex === fullText.length && segmentIndex < currentText.length - 1) {
      // Move to next segment
      const timeout = setTimeout(() => {
        setSegmentIndex(segmentIndex + 1)
        setCharIndex(0)
      }, typingSpeed * 2)
      return () => clearTimeout(timeout)
    }

    if (!isDeleting && charIndex === fullText.length && segmentIndex === currentText.length - 1) {
      // Finished all segments - pause then delete
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting) {
      const currentDeleteSegment = displayedText[segmentIndex]
      const deleteText = currentDeleteSegment?.text || ''

      if (deleteText.length > 0) {
        // Delete from current segment
        const timeout = setTimeout(() => {
          const newDisplayed = [...displayedText]
          newDisplayed[segmentIndex] = {
            ...newDisplayed[segmentIndex],
            text: deleteText.slice(0, -1)
          }
          setDisplayedText(newDisplayed)
          setCharIndex(deleteText.length - 1)
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else if (segmentIndex > 0) {
        // Move to previous segment
        const prevSegment = currentText[segmentIndex - 1]
        setSegmentIndex(segmentIndex - 1)
        setCharIndex(prevSegment.text.length)
      } else {
        // All deleted - move to next text
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
        setSegmentIndex(0)
        setCharIndex(0)
        setDisplayedText([])
      }
    }
  }, [charIndex, isDeleting, textIndex, segmentIndex, texts, typingSpeed, deletingSpeed, pauseDuration, displayedText])

  return (
    <span>
      {displayedText.map((segment, i) => (
        <span
          key={i}
          style={{ 
            color: segment.color || '#0F172A',
            fontWeight: segment.bold ? 900 : 700
          }}
        >
          {segment.text}
        </span>
      ))}
      <span className={`inline-block w-[3px] h-[0.8em] bg-[#2563EB] ml-1 align-middle transition-opacity ${
        showCursor ? 'opacity-100' : 'opacity-0'
      }`} />
    </span>
  )
}
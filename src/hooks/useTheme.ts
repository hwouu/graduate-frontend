// src/hooks/useTheme.ts
import { useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 로컬 스토리지에서 테마 설정 가져오기
    const savedTheme = localStorage.getItem('theme') as Theme
    // 시스템 설정 확인
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return savedTheme || (prefersDark ? 'dark' : 'light')
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // 이전 테마 클래스 제거
    root.classList.remove('light', 'dark')
    // 새로운 테마 클래스 추가
    root.classList.add(theme)
    
    // 로컬 스토리지에 테마 설정 저장
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { ArrowLeftWithLine, ArrowRightWithLine } from '@/components/icons'
import { THEME } from '@/constants/theme'
import { postService } from '@/services/noAuth/post'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [allPost, setAllPost] = useState(null)

  useEffect(() => {
    postService.getAll().then((res) => setAllPost(res.data))
  }, [])

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <Button>test</Button>
      <ArrowLeftWithLine
        height={100}
        width={100}
        color={THEME.COLORS.PRIMARY}
      />
      <ArrowRightWithLine />
      <pre>{JSON.stringify(allPost, null, 2)}</pre>
    </div>
  )
}

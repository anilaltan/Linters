import React from 'react'

import { Button } from '@/components/Button'

export function CustomButton(props) {
  return (
    <Button {...props} type="submit">
      Tıkla
    </Button>
  )
}

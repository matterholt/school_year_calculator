import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Popper from '@mui/material/Popper'

const toolbarStle = {
  outline: 'solid',
  height: 150,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

interface PopOverProps {
  name: string
  activePopOver: boolean
  children: React.ReactNode
}

export function PopOver({ name, activePopOver, children }: PopOverProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const popId = React.useRef()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined


  console.log("GETT",anchorEl )

  return (
    <div style={toolbarStle}>
      <Button
        variant="contained"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        {name}
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          {children}
        </Box>
      </Popper>
    </div>
  )
}

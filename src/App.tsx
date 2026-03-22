import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import {
  ActionButton,
  type ActionButtonMenuItemId
} from 'god-button-action-button'

export default function App() {
  const [last, setLast] = useState<ActionButtonMenuItemId | null>(null)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        p: 3,
        maxWidth: 720,
        mx: 'auto'
      }}
    >
      <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          god-button-action-button
        </Typography>
        <Typography color="text.secondary" paragraph>
          Floating button is from the npm package. Tap it to open the menu;
          drag it to move. Long-press the circle to snap back.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last menu selection:{' '}
          <strong>{last ?? '—'}</strong>
        </Typography>
      </Paper>

      <ActionButton
        yourRoleName="تست"
        playerNamesContent="بازیکن ۱، بازیکن ۲"
        gameRoleNamesContent="پزشک، مافیا"
        onItemClick={(id) => setLast(id)}
      />
    </Box>
  )
}

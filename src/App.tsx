import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import {
  ActionButton,
  type ActionButtonMenuItemId
} from 'god-button-action-button'
import { useMockMessages } from './useMockMessages'

export default function App() {
  const [last, setLast] = useState<ActionButtonMenuItemId | null>(null)
  const messages = useMockMessages(15_000)

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
      {/* <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          god-button-action-button
        </Typography>
        <Typography color="text.secondary" paragraph>
          Mock chat pushes a message every 15s. A preview bubble appears above the
          button for 10s; the red badge shows unread until you open the menu and tap{' '}
          <strong>پیام ها</strong>.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last menu selection: <strong>{last ?? '—'}</strong>
        </Typography>
      </Paper> */}

      <ActionButton
        yourRoleName="تست"
        playerNamesContent="بازیکن ۱، بازیکن ۲"
        gameRoleNamesContent="پزشک، مافیا"
        messages={messages}
        messagePreviewDurationMs={10_000}
        onItemClick={(id) => setLast(id)}
      />
    </Box>
  )
}

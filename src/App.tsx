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
        playerNamesContent={
          <>
            1. Dummy3 Dummy3
            <br />
            2. Dummy7 Dummy7
            <br />
            3. Dummy10 Dummy10
            <br />
            4. Dummy1 Dummy1
            <br />
            5. Dummy12 Dummy12
            <br />
            6. Dummy11 Dummy11
            <br />
            7. Dummy5 Dummy5
            <br />
            8. Dummy13 Dummy13
            <br />
            9. سیدو sido
            <br />
            10. Dummy6 Dummy6
            <br />
            11. Dummy2 Dummy2
          </>
        }
        gameRoleNamesContent={
          <>
            1. خدا
            <br />
            2. پدرخوانده
            <br />
            3. شیاد
            <br />
            4. ناتو
            <br />
            5. محقق
            <br />
            6. رویین تن
            <br />
            7. بازپرس
            <br />
            8. پزشک
            <br />
            9. کارآگاه
            <br />
            10. شهروند
            <br />
            11. شهروند 1
          </>
        }
        messages={messages}
        messagePreviewDurationMs={10_000}
        onItemClick={(id) => setLast(id)}
      />
    </Box>
  )
}

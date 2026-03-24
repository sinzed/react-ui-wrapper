import { useState } from 'react'
import Box from '@mui/material/Box'
import {
  ActionButton,
  type ActionButtonMenuItemId
} from 'god-button-action-button'
import { useMockMessages } from './useMockMessages'

export default function App() {
  const [, setLast] = useState<ActionButtonMenuItemId | null>(null)
  const messages = useMockMessages(15_000)
  const playerNames = [
    'Dummy3 Dummy3',
    'Dummy7 Dummy7',
    'Dummy10 Dummy10',
    'Dummy1 Dummy1',
    'Dummy12 Dummy12',
    'Dummy11 Dummy11',
    'Dummy5 Dummy5',
    'Dummy13 Dummy13',
    'سیدو sido',
    'Dummy6 Dummy6',
    'Dummy2 Dummy2'
  ]
  const gameRoleNames = [
    'خدا',
    'پدرخوانده',
    'شیاد',
    'ناتو',
    'محقق',
    'رویین تن',
    'بازپرس',
    'پزشک',
    'کارآگاه',
    'شهروند',
    'شهروند 1'
  ]

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
        yourRoleName="پزشک"
        yourRoleDescription="در طول شب می توانید یک بازیکن را برای نجات انتخاب کنید. اگر مافیا همان بازیکن را هدف بگیرد، او زنده می ماند."
        playerNames={playerNames}
        gameRoleNames={gameRoleNames}
        messages={messages}
        messagePreviewDurationMs={10_000}
        onItemClick={(id) => setLast(id)}
      />
    </Box>
  )
}

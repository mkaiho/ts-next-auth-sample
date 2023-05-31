import { Box, CircularProgress, CircularProgressProps } from '@mui/material'

export interface LoadingPanelProps extends CircularProgressProps {}

export default function LoadingPanel(props: LoadingPanelProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress {...props} />
    </Box>
  )
}

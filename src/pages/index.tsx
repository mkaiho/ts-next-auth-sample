import { Box, Container, Paper, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container>
          <Paper sx={{ padding: 4, marginY: 2 }}>
            <Typography>hello world!</Typography>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

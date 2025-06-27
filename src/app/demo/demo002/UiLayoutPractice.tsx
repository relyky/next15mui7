import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import { useMemo } from "react";

export default function UiLayoutPractice() {

  const numArray = useMemo(() => {
    return Array.from({ length: 9 }, (_, i) => i + 1); // [1~9]
  }, []);


  return (
    <div>
      <Typography variant="h3" gutterBottom>使用介面部局</Typography>
      <Box typography='body1'>參考：Border、Stack、Grid。</Box>

      <Stack spacing={2}
        sx={{ p: 2, border: 1, borderColor: 'grey.A700', borderRadius: 1 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((v, i) => (
          <Item key={v}>
            {`Item ${v}`}
          </Item>
        ))}
      </Stack>

    </div>
  )
}

//-----------------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  width: 160,
  height: 90,
  padding: theme.spacing(2),
  ...theme.typography.body1,
  textAlign: 'center',
}));


// const Item = styled('div')(({ theme }) => ({
//   backgroundColor: '#fff',
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   borderRadius: 4,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#262B32',
//   }),
// }));
import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import SimpleRadioField from "./widgets/SimpleRadioField";
import { useState } from "react";
import { Grid, ResponsiveStyleValue, SxProps, SystemProps } from '@mui/system';

export default function UiLayoutPractice() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>使用介面部局</Typography>

      <Box component='p' typography='body1'>
        [Stack](https://mui.com/system/react-stack/)<br />
        [Grid](https://mui.com/material-ui/react-grid/)<br />
        [Border](https://mui.com/system/borders/)
      </Box>

      <Box typography='body1'>參考：Border、Stack、Grid。</Box>

      <StackLab />

    </div>
  )
}

//-----------------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  ...theme.typography.body1,
  textAlign: 'center',
}));

//-----------------------------------------------------------------------------

function StackLab() {
  //const [direction, setDirection] = useState<ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>>('column');
  const [direction, setDirection] = useState<string>('column');
  const [flexWrap, setFlexWrap] = useState<string>('nowrap');
  const [justifyContent, setJustifyContent] = useState<string>('flex-start');
  const [alignContent, setAlignContent] = useState<string>('flex-start');
  const [alignItems, setAlignItems] = useState<string>('flex-start');
  const [spacing, setSpacing] = useState<string>('0')
  const [gap, setGap] = useState<string>('0')

  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='direction' value={direction} onChange={setDirection}
            optionList={['row', 'row-reverse', 'column', 'column-reverse']} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='flexWrap' value={flexWrap} onChange={setFlexWrap}
            optionList={['nowrap', 'wrap', 'wrap-reverse']} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SimpleRadioField label='justifyContent' value={justifyContent} onChange={setJustifyContent}
            optionList={['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SimpleRadioField label='alignContent' value={alignContent} onChange={setAlignContent}
            optionList={['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'stretch']} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SimpleRadioField label='alignItems' value={alignItems} onChange={setAlignItems}
            optionList={['flex-start', 'center', 'flex-end', 'stretch', 'baseline']} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='spacing' value={spacing} onChange={setSpacing}
            optionList={['0', '0.5', '1', '2', '3', '4', '8', '12']} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='gap' value={gap} onChange={setGap}
            optionList={['0', '0.5', '1', '2', '3', '4', '8', '12']} />
        </Grid>
      </Grid>

      <Stack direction={direction as any}
        flexWrap={flexWrap as any}
        justifyContent={justifyContent as any}
        alignContent={alignContent}
        alignItems={alignItems as any}
        spacing={Number(spacing)}
        gap={Number(gap)}
        sx={{
          p: 1,
          border: 1, borderColor: 'grey.A700', borderRadius: 1,
          minHeight: 400,
        }}>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => (
          <Item key={v}>
            <Box sx={{ py: `${v * 4}px`, textAlign: 'center' }}>
              {`Item ${v}`}
            </Box>
          </Item>
        ))}
      </Stack>
    </div>

  )
}
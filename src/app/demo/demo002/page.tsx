import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default async function Demo002Page() {

  return (
    <div >
      <h1>Demo002Page</h1>
      <p>今天天氣真好。</p>

      <MenuIcon />
      <Button variant='contained' color='primary'>按鈕</Button>

    </div>
  )
}
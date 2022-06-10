import { useRecoilState } from 'recoil';
import { commentModalState } from '../atom/commentModalAtom';

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(commentModalState);
  if (open) {
    return <button onClick={() => setOpen(!open)}>click me</button>;
  } 
}

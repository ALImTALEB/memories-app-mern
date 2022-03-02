import React,{useState, useRef} from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { commentPost } from '../../actions/posts'

import useStyles from './styles'

const CommentSection = ({ post }) => {
    const classes = useStyles()
    const [comments, setComments] = useState([1, 2, 3, 4])
    const [comment, setComment] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()



    const handleClick=()=> {
        const finalComment = `${user.result.name}: ${comment}`

        dispatch(commentPost(finalComment, post._id))
    }

  return (
      <div> 
    <div className={classes.commentsOuterContainer} >
    <div className={classes.commentsInnerContainer} >
    <Typography gutterBottom variant="h6" > Comments </Typography>
    { comments.map((c, i)=> (
        <Typography key={i} gutterBottom variant="subtitle1" >
        Comment {i}
        </Typography>
    )) }
    </div>
    {user?.result?.name && (
    <div style={{width: '70%'}}>
    <Typography gutterBottom variant="h6" > Write a comment </Typography>
    <TextField 
       fullWidth
       rows={4}
       variant="outlined"
       label="Comment"
       multiline
       value={comment}
       onChange={(e)=> setComment(e.target.value)}
     />
     <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick} >
     Comment
     </Button>
    </div>
    )}
    </div>
    </div>
  )
}

export default CommentSection
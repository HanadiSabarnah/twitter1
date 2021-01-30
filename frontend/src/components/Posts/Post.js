import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const styles = {
	paper: {
		padding: 10,
		display: 'flex',
		marginTop: 10,
	},
	avatar: {
		minWidth: 10,
		margin: '4px 10px 4px 4px'
	},
	login: {
		marginBottom: 5
	},
	time: {
		marginLeft: 10,
		color: '#bbb',
		fontSize: 14
    },
    root: {
        borderRadius: 30,
        width:30,
        height:30,
          margin:'4px 10px 4px 4px'
       
      }
}

class Post extends Component {
   
	render () {

       
        const { classes, post } = this.props
        console.log(post)
		return (
			<Paper className={classes.paper}>
				
				<div>
                
                    
					<h3 className={classes.login}>
						<Link to={`/profile/${post.user.id}`}  >
                        <img className={classes.root} src=  {post.user.image}/>
                            {post.user.login}
                           
                         
                            </Link>
						<span className={classes.time}>{(new Date(post.createdAt)).toLocaleString()}</span>
					</h3>
					{post.text}
				</div>
			</Paper>
		)
	}
}


export default withStyles(styles)(Post)
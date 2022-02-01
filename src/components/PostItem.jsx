import React from 'react'
import Card from './UI/Card/Card'

const PostItem = (props) => {
	return (
		<Card>
			<div>
				<h4>{props.title}</h4>
				<span>{props.id}</span>
			</div>

			<img src={props.url} alt='image of rectangle' />
		</Card>
	)
}

export default PostItem

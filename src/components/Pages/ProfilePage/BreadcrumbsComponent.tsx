import React from 'react'
import { NavLink } from 'react-router-dom'

type BreadcrumbsComponentType = {
	isOwner: boolean
}
export const BreadcrumbsComponent: React.FC<BreadcrumbsComponentType> = ({
	isOwner,
}) => {
	return (
		<>
			{isOwner ? (
				<ul className='breadcrumbs'>
					<li className='breadcrumbs__item'>
						<NavLink className='breadcrumbs__item-link' exact to='/profile'>
							Profile
						</NavLink>
					</li>
					<li className='breadcrumbs__item'>
						<NavLink
							className='breadcrumbs__item-link'
							exact
							to='/profile/posts'>
							My posts
						</NavLink>
					</li>
				</ul>
			) : (
				<ul className='breadcrumbs'>
					<li className='breadcrumbs__item'>
						<NavLink
							className='breadcrumbs__item-link active'
							exact
							to='/profile'>
							Profile
						</NavLink>
					</li>
				</ul>
			)}
		</>
	)
}

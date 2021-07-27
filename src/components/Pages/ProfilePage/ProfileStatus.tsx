import React, { ChangeEvent, useEffect, useState } from 'react'
import bxPencil from '@iconify-icons/bx/bx-pencil'
import { Icon } from '@iconify/react'

type PropsType = {
	status: string
	isOwner: boolean
	updateProfileStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = props => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	let activateEditMode = () => {
		setEditMode(true)
	}

	let deactivateEditMode = () => {
		setEditMode(false)
		props.updateProfileStatus(status)
	}

	let onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.currentTarget.value)
	}
	return (
		<>
			{props.isOwner ? (
				<div>
					{!editMode ? (
						<div className='status'>
							<Icon icon={bxPencil} />
							<div className='status-text' onClick={activateEditMode}>
								{props.status || (
									<div className='profile_no-status-text'>
										Click to write your status
									</div>
								)}
							</div>
						</div>
					) : (
						<input
							onChange={onStatusChange}
							autoFocus={true}
							id='input_text'
							type='text'
							placeholder='write and click anywhere'
							onBlur={deactivateEditMode}
							value={status}
						/>
					)}
				</div>
			) : (
				props.status
			)}
		</>
	)
}

export default ProfileStatus

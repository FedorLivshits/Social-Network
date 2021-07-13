import React, { useState } from 'react'
import './Login.css'
import { login, logout } from '../../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { AppStateType } from '../../../redux/redux-store'

type MapStateToPropsType = {
	isAuth: boolean
}
type MapDispatchToPropsType = {
	login: (email: string, password: string, rememberMe: boolean) => void
}

type PropsType = {}
	
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType & PropsType> = ({ login, isAuth }) => {
	const validationSchema = yup.object({
		email: yup.string().required('Email is required'),
		password: yup.string().required('Password is required'),
	})

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
		onSubmit: values => {
			console.log(values.email, values.password, values.rememberMe)
			login(values.email, values.password, values.rememberMe)
		},
		validationSchema: validationSchema,
	})

	const emailValidation = formik.touched.email && formik.errors.email
	const passwordValidation = formik.touched.password && formik.errors.password

	if (isAuth) {
		return <Redirect to={'/profile'} />
	}
	return (
		<div className='body'>
			<div className='container__login'>
				<input type='checkbox' id='flip' />
				<div className='cover'>
					<div className='front'>
						<div className='text'>
							<span className='text-1'>
								Every new friend is a <br /> new adventure
							</span>
							<span className='text-2'>Let's get connected</span>
						</div>
					</div>
					<div className='back'>
						<div className='text'>
							<span className='text-1'>
								Complete miles of journey <br /> with one step
							</span>
							<span className='text-2'>Let's get started</span>
						</div>
					</div>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<div className='form-content'>
						<div className='login-form'>
							<div className='title'>Login</div>
							<div className='input-boxes'>
								<div
									className={emailValidation ? 'input-box error' : 'input-box'}>
									<input
										id='email'
										name='email'
										type='text'
										placeholder='Enter your email'
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{emailValidation && (
									<p className='error'>{formik.errors.email}</p>
								)}
								<div
									className={
										passwordValidation ? 'input-box error' : 'input-box'
									}>
									<input
										id='password'
										name='password'
										type='password'
										placeholder='Enter your password'
										value={formik.values.password}
										onChange={formik.handleChange}
									/>
								</div>
								{passwordValidation && (
									<p className='error'>{formik.errors.password}</p>
								)}

								<label className='checkbox-box' htmlFor='rememberMe'>
									<input
										id='rememberMe'
										name='rememberMe'
										type='checkbox'
										value={formik.values.rememberMe.toString()}
										onChange={formik.handleChange}
									/>
									<span className='label'>Remember me</span>
								</label>
								<div className='button input-box'>
									<button
										type='submit'
										className='btn btn-outline-dark w-100'
										disabled={!formik.isValid && !formik.dirty}>
										Log in
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)

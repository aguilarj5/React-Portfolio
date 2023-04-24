import React from 'react';

export default function Contact() {
	return (
		<div style={{backgroundColor: "#8AB0AB"}}>
			<h1>Contact</h1>
			<form>
				<div class="form-group">
					<label for="name">Name:</label>
					<input
						type="text"
						class="form-control"
						id="name"
						aria-describedby="username"
						placeholder="Enter Name"
					></input>
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					></input>
					<small id="emailHelp" class="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input
						type="password"
						class="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
					></input>
				</div>
				<button type="submit" class="btn mt-2 btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

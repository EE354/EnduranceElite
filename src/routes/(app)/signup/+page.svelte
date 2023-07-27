<script>
	import { enhance } from '$app/forms';
	import { toastStore } from '@skeletonlabs/skeleton';

	const errorToast = {
		message: 'There was an error signing up',
		background: 'variant-filled-error'
	};

	export let form;

	$: if (form?.message) {
		errorToast.message = form.message;
		toastStore.trigger(errorToast);
	}
</script>

<div class="container h-full mt-32 mb-56 flex justify-center content-center">
	<div class="space-y-5 container flex justify-center content-center">
		<form method="POST" use:enhance>
			<label class="label">
				<span>Name</span>
				<div class="flex gap-1">
					<input class="input" type="text" name="first" placeholder="First" />
					<input class="input" type="text" name="last" placeholder="Last" />
				</div>
			</label>
			<label class="label">
				<span>Email</span>
				<input class="input" type="Email" name="email" placeholder="Email" />
			</label>
			<label class="label">
				<span>Password</span>
				<input class="input" type="password" name="password" placeholder="Password" />
			</label>
			<label class="label">
				<span>Confirm Password</span>
				<input class="input" type="password" name="confirmPassword" placeholder="Password" />
			</label>
			<label>
				<span>Date of Birth</span>
				<input type="date" class="input" name="dob" />
			</label>

			<div class="flex mt-2">
				<input type="submit" class="btn bg-primary-600 dark:bg-primary-900" value="Sign Up"/>
				<div class="container grid items-center justify-items-center">
					<div>
						<span>Already have an Account?</span>
						<a href="/login" class="font-semibold hover:underline">Log In</a>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

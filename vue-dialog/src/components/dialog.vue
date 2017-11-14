<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					
					<!-- model header -->
					<div class="modal-header">
						<slot name="header">
							Summer
						</slot>
					</div>

					<!-- model-body -->
					<div class="modal-body">
						<slot name="body">
							body
						</slot>
					</div>

					<!-- model-footer -->
					<div class="modal-footer">
						<slot name="footer">
							footer
							<button class="modal-default-btn" @click="$emit('close')">ok</button>
						</slot>
					</div>

				</div>
			</div>
		</div>
	</transition>
</template>
export function nav(element) {
  element.innerHTML = `
  <nav id="ac-localnav" class="ac-localnav-dark ac-localnav-scrim ac-localnav-noborder js touch css-sticky" lang="en-US" dir="ltr" data-sticky="" data-analytics-activitymap-region-id="local nav" role="navigation" aria-label="Local">
		<div class="ac-ln-wrapper">
			<div class="ac-ln-background"></div>
			<div class="ac-ln-content">
				<div class="ac-ln-title">
					<a href="/apple-vision-pro/" data-analytics-title="product index">
									Apple Ravioli
								</a>
				</div>
				<div class="ac-ln-menu">
					<a href="#ac-ln-menustate" class="ac-ln-menucta-anchor ac-ln-menucta-anchor-open" id="ac-ln-menustate-open" role="button">
											<span class="ac-ln-menucta-anchor-label">Local Nav Open Menu</span>
										</a>
					<a href="#" class="ac-ln-menucta-anchor ac-ln-menucta-anchor-close" id="ac-ln-menustate-close" role="button">
											<span class="ac-ln-menucta-anchor-label">Local Nav Close Menu</span>
										</a>
					<div class="ac-ln-menu-tray">
						<ul class="ac-ln-menu-items">
							<li class="ac-ln-menu-item">
								<span class="ac-ln-menu-link current" role="link" aria-disabled="true" aria-current="page">Overview</span>
							</li>
							<li class="ac-ln-menu-item">
								<a href="/apple-vision-pro/guided-tour/" class="ac-ln-menu-link" data-analytics-title="guided tour">Guided Tour</a>
							</li>
							<li class="ac-ln-menu-item">
								<a href="/apple-vision-pro/specs/" class="ac-ln-menu-link" data-analytics-title="tech specs">Tech Specs</a>
							</li>
							
						</ul>
					</div>
					<div class="ac-ln-actions">
						<div class="ac-ln-action ac-ln-action-menucta" aria-hidden="true">
							<label for="ac-ln-menustate" class="ac-ln-menucta">
													<span class="ac-ln-menucta-chevron"></span>
												</label>
						</div>
						<div class="ac-ln-action ac-ln-action-button">
							<a class="ac-ln-button" href="/us/shop/goto/buy_vision/apple_vision_pro" data-analytics-title="pre-order apple vision pro">
														Pre-order
														<span class="ac-ln-action-product">Apple Ravioli</span>
													</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
                `
}

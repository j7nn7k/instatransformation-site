jQuery(function($){
	var handler = function(){
		$( this ).addClass( 'open' ).siblings().addClass( 'hide' );
		$( this ).children( '.content-feature-entry' ).addClass( 'show' );
		$( ".content-feature" ).unbind( "click", handler );
	};
	
	$( ".content-feature" ).bind( "click", handler );
	
	$( 'body' ).on( "click", ".content-feature-close", function(){
		$( '.content-feature' ).removeClass( 'open hide' );
		$( '.content-feature-entry' ).removeClass( 'show' );
		$( ".content-feature" ).bind( "click", handler );
	});
	
	/*
		avoid new calculating for LESS calc function
	*/
	var contentFeatureTableHeight = $( '.content-feature-table' ).outerHeight();
	$( '.content-feature-table' ).outerHeight( contentFeatureTableHeight );
	
	$( '.content-feature-gallery' ).on( "click tap", "a", function( event ){
		var imageSrc = $( this ).attr( 'href' );
		$( '.content-feature-gallery-overlay img' ).attr( 'src', imageSrc );
		$( '.content-feature-gallery-overlay' ).fadeIn();
		
		event.preventDefault();
	});
	
	$( 'body' ).on( "click tap", ".content-feature-gallery-overlay", function(){
		$( '.content-feature-gallery-overlay' ).fadeOut();
	});
});
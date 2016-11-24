module.exports = function(startOfDay, endOfDay){

	if ( typeof(startOfDay) !== 'number' ) {
		startOfDay = 9
	}
	if ( typeof(endOfDay) !== 'number' ) {
		endOfDay = 18
	}

	var SUNDAY = 0;
	var SATURDAY = 6;

	var isOutOfHours = function(){
		var now = new Date()
		var isEarly = ( now.getHours() <= startOfDay )
		var isLate = ( now.getHours() >= endOfDay )
		var day = now.getDay()
		var isWeekend = ( day === SATURDAY ) || day === SUNDAY
		return isEarly || isLate || isWeekend
	}

	// Mainly for readability
	var isBusinessHours = function(){
		return ! isOutOfHours()
	}

	return {
		isBusinessHours,
		isOutOfHours
	}
}


Determine whether it's in business hours or not.

## Usage

Just:

	var businessHours = require('is-in-business-hours')()

Or to specify custom business hours:

	var businessHours = require('is-in-business-hours')(9, 18)

Then just:

	var isInBusinessHours = businessHours.isBusinessHours()

or

	var isOutOfHours = businessHours.isOutOfHours()
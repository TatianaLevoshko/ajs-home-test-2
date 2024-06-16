export default function healthStatus(object) {
	let result = '';
  
	if (object.health > 50) {
	  result = 'healthy';
	} else if (object.health < 15) {
	  result = 'critical';
	} else {
	  result = 'wounded';
	}
  
	return result;
  }
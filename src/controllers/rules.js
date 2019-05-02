
const {Rules,rulesArray} = require('../models/rules')

class RulesController {
	static getRules(req,res){
		return {
			"status":200,
			"success":"true",
			"message":"retrieved successfully",
			"Borrowers":rulesArray
		};
	}
	static getRule(req,res){
			const get_id = rulesArray.find(check_id => check_id.rulesId===parseInt(req.params.id));
			
			if(!get_id){
				return{
				"status":404,
				"success":"false",
				"message":" rules with that id not found",get_id
	
		   };
		}
		   return {
			get_id,
			"message":"rules with that is is succesfully retrieved ",
			"status":"200",
			"success":"true"
		}
		}
	
	
	static createRules(req,res){
		const add=new Rules ({
		rulesId:rulesArray.length+1,
		rule_description:req.body.rule_description,
		rule_value:req.body.rule_value
	})
	if(!req.body.rule_description) return {
		"status":400,
		"success":"false",
		"message":" rule_description is required"
	};
				
	if(!req.body.rule_value) return {
		"status":400,
		"success":"false",
		"message":"rule_value is required",
	};
		
	rulesArray.push(add);
	 return {
		"status":200,
		"success":"true",
		"message":" successfully added",
		add
					
	};
	}
	static deleteRule(req,res){
		const get_id = rulesArray.find(check_id => check_id.rulesId === parseInt(req.params.id));
	if (!get_id) {
		return{
			"status":200,
			"success":"true",
			"message":" rulesId not found"
		};
	}

		const index=borrowArray.indexOf(get_id);
		rulesArray.splice(index,1);
		return{
			"status":200,
			"success":"true",
			"message":" successfully deleted",
			get_id

		};


	}
	
	static updateRules(req,res){
		const newRule = rulesArray.find(g => g.rulesId === parseInt(req.params.rulesId));
		if (!rulesArray) return{
			"status":200,
			"success":"true",
			"message":" The Rule with the given ID was not found ",
			get_id

		};

		const rulesArray = req.body.rulesArray;
		return{
			"status":200,
			"success":"true",
			"message":" successfully updated",
			get_id

		};


	}

	static patchRule(req,res){
		"Not implemented"
	}
}
    
    
module.exports = RulesController
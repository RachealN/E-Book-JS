
const {Borrowers,borrowArray} = require('../models/borrow')

class BorrowingController {
	static getBorrowers(req,res){
		return {
			"status":200,
			"success":"true",
			"message":"retrieved successfully",
			"Borrowers":borrowArray
		};
	}
	static getBorrower(req,res){
			const get_id = borrowArray.find(check_id => check_id.borrowId===parseInt(req.params.id));
			
			if(!get_id){
				return{
				"status":404,
				"success":"false",
				"message":" BorrowingId not found",get_id
	
		   };
		}
		   return {
			get_id,
			"message":"Borrower with that id is found",
			"status":"200",
			"success":"true"
		}
		}
	static createBorrower(req,res){
		const add = new Borrowers ({
			borrowingId:borrowingId.length + 1,
			date_issued:req.body.date_issued,
			date_due_for_return:req.body.date_due_for_return,
			date_returned:req.body.date_returned,
			amount_of_fine:req.body.amount_of_fine
				});
				if(!req.body.date_issued) return {
					"status":400,
					"success":"false",
					"message":" date_issued is required",
				};
				
				if(!req.body.date_due_for_return) return {
					"status":400,
					"success":"false",
					"message":"date_due_for_return is required",
				};
				
				if(!req.body.date_returned) return {
					"status":400,
					"success":"false",
					"message":" date_returned is required",
				};

				if(!req.body.amount_of_fine) return {
					"status":400,
					"success":"false",
					"message":" amount_of_fine is required",
				};

		
		
		borrowArray.push(add);
			return {
				"status":200,
				"success":"true",
				"message":" successfully added",
				add
				
			};
		}
	static deleteBorrow(req,res){
		const get_id = borrowArray.find(check_id => check_id.borrowingId === parseInt(req.params.id));
	if (!get_id) {
		return{
			"status":200,
			"success":"true",
			"message":" borrowingId not found"
		};
	}

		const index=borrowArray.indexOf(get_id);
		borrowArray.splice(index,1);
		return{
			"status":200,
			"success":"true",
			"message":" successfully deleted",
			get_id

		};


	}
	
	static updateBorrow(req,res){
		const newBorrower = borrowArray.find(g => g.borrowingId === parseInt(req.params.borrowingId));
		if (newBorrower) {
			(newBorrower.date_issued = req.body.date_issued),(newBorrower.date_due_for_return = req.body.date_due_for_return),(newBorrower.date_returned = req.body.date_returned)
			(newBorrower.amount_of_fine = req.body.amount_of_fine),(newBorrower.address = req.body.address),(newBorrower.phoneNumber = req.body.phoneNumber)
			return{
				"status":200,
				"success":"true",
				"message":"successfully updated ",
				newBorrower

			};
		}
		return{
			"status":404,
			"success":"false",
			"message":" The borrower with the given ID was not found "
			

		};


	}

	static patchBorrower(req,res){
		"Not implemented"
	}
}
    
    
module.exports = BorrowingController
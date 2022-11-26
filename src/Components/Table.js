import React from 'react'

export default function Table() {
  return (
    <div>
       <div className="container mt-3 text-center">
    	<div className="row">
    		<div className="col-md-12">
    			<div className="table responsive">
    				<table className="table table-bordered">
    					<thead>
    						<tr>
    							<th>Name</th>
    							<th>Designation</th>
    							<th>Email ID</th>
    						</tr>
    					</thead>
    					<tbody>
    						<tr>
    							<td>Mr. Abdul Latheef Shaikh</td>
    							<td>Admin</td>
    							<td>latheefindia@sipco.com</td>
    						</tr>
    						<tr>
    							<td>Ms. Riza Shaikh</td>
    							<td>BMS</td>
    							<td>support@Sipcolndia.com</td>
    						</tr>
    						<tr>
    							<td>Ms.Kamila Shaikh</td>
    							<td>B.A. M.A</td>
    							<td>support@Sipcolndia.com</td>
    						</tr>
    					</tbody>
    					<thead>
    						<tr>
    							<th></th>
    							<th>Legal Department</th>
    							<th> </th>
    						</tr>
    					</thead>
    					<tbody>
    						<tr>
    							<td>Ms. Tasneem Banu</td>
    							<td>BLS. LLB. DCL. LLM.</td>
    							<td>legal.dept@Sipcolndia.com</td>
    						</tr>
    						<tr>
    							<td>Ms. lmra Samsuddin</td>
    							<td>BLS. LLB. LLM.</td>
    							<td>legal.dept@Sipcolndia.com </td>
    						</tr>
    					</tbody>
    				</table>
    			</div>
    		</div>
    	</div>
    </div>
    </div>
  )
}

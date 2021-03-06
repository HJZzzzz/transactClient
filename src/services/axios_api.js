var axios = require('axios');
let baseURL = 'http://localhost:5000'
var client = axios.create({
  baseURL: baseURL,
  /* other custom settings */
});

export default client 

export function retrieveAllProjects(){
  return client.get("/retrieveAllProjects")
}

export function retrieveProjectDetails(data){
  return client.get("/retrieveProjectDetails?id="+data)
}

export function retrieveDonorsByProject(data){
  return client.get("/retrieveDonorsByProject?id="+data)
}

export function makeDonation(data){
  return client.post("/makeDonation",data)
}

export function confirm(data){
  return client.post("/confirmMoney",data)
}

export function retrieveConfirmation(data){
  return client.get("retrieveConfirmation?project_id="+data)
}

export function donorRegister(data){
  return client.post('/registerDonor',data)
}

export function charityRegister(data){
  return client.post('/registerOrganization',data)
}

export function donorLogin(username, password){
  return client.get('/donor/login',{
    params: {
      username: username,
      password: password
    }
  })
}

export function charityLogin(username, password){
  return client.get('/charity/login',{
    params: {
      username: username,
      password: password
    }
  })
}

export function donorProfile(address){
  return client.get("/getDonorDetails", {
    params: {
      donorAddress: address
    }
  })
}

export function donorUpdate(data){
  return client.post('/updateDonor',data)
}

export function getProjectByDonor(address){
  return client.get("/getProjectsByDonor", {
    params: {
      donorAddress: address
    }
  })
}


export function charityProfile(address){
  return client.get("/getCharityDetails", {
    params: {
      charityAddress: address
    }
  })
}

export function charityUpdate(data){
  return client.post('/updateOrganization',data)
}

export function getProjectByCharity(address){
  return client.get("/getProjectsByOrganization", {
    params: {
      charityAddress: address
    }
  })
}

export function adminLogin(username, password){
  return client.get("/admin/login", {
    params: {
      username: username,
      password: password
    }
  })
}

export function pendingDonorRetrieval(){
  return client.get("/getAllPendingDonors")
}

export function pendingCharityRetrieval(){
  return client.get("/getAllPendingOrganizations")
}

export function charityApproval(data){
  return client.post('/approveOrganization',data)
}

export function charityReject(data){
  return client.post('/rejectOrganization',data)
}

export function donorApproval(data){
  return client.post('/approveDonor',data)
}

export function donorReject(data){
  return client.post('/rejectDonor', data)
}

export function pendingProjectRetrieval(){
  return client.get("/getAllPendingProjects")
}

export function projectApproval(data){
  return client.post('/approveProject',data)
}

export function projectReject(data){
  return client.post('/rejectProject', data)
}

export function approvedProjectRetrieval(){
  return client.get("/getAllApprovedProjects")
}

export function projectStop(data){
  return client.post('/stopProject', data)
}

export function saveProject(data){
  return client.post('/registerProject', data)
}

export function downloadBeneficiaryList(projectId){
  let url = baseURL + "/beneficiaryFile?id=" + projectId
  window.open(url, "_blank")
}

export function downloadCertificate(charityAddress){
  let url = baseURL + "/certificateFile?address=" + charityAddress
  window.open(url, "_blank")
}

export function downloadBeneficiaryFormat(){
  let url = baseURL + "/beneficiaryFileFormat"
  window.open(url, "_blank")
}



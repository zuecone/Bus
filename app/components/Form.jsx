var React = require('react');
var firebase = require('firebase')


  // Initialize Firebase
const firebaseConfig = {
  apiKey: "<AIzaSyA3NEPd7jXFzCAXkWUTCrc2qqOU7SB4Sxc",
  authDomain: "AIzaSyA3NEPd7jXFzCAXkWUTCrc2qqOU7SB4Sxc",
  databaseURL: "https://neednow-632dd.firebaseio.com",
  storageBucket: "neednow-632dd.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

var Form = React.createClass({
  getInitialState: function() {
    return {
      ServiceCat: '',
      ProvinceCat: '',
      BusinessCat: '',
      Success: ''
    };
  },
  componentWillMount: function() {
    //this.firebaseRef = new Firebase("https://neednow-632dd.firebaseio.com/");
  },
  BusinessChange: function(e){
    //console.log(e.target.value);
    this.setState({BusinessCat: e.target.value});
  },
  ServiceChange: function(e){
    //console.log(e.target.value);
    this.setState({ServiceCat: e.target.value});
  },
  ProvinceChange: function(e){
    //console.log(e.target.value);
    this.setState({ProvinceCat: e.target.value});
  },

  onSubmit: function(e) {
      e.preventDefault();
      this.itemsRef = firebaseApp.database().ref();


      var CompanyName = this.refs.CompanyName.value;
      var RegistrationNumber = this.refs.RegistrationNumber.value;
      var ServiceCategory = this.state.ServiceCat;
      var MainServices = this.refs.MainServices.value;
      var UnitNumber = this.refs.UnitNumber.value;
      var ComplexName = this.refs.ComplexName.value;
      var StreetNumber = this.refs.StreetNumber.value;
      var StreetName = this.refs.StreetName.value;
      var Suburb = this.refs.Suburb.value;
      var City = this.refs.City.value;
      var Province = this.state.ProvinceCat;
      var BusinessType = this.state.BusinessCat;
      var ContactNumber1 = this.refs.ContactNumber1.value;
      var ContactNumber2 = this.refs.ContactNumber2.value;
      var EmailAddress = this.refs.EmailAddress.value;
      var WebAddress = this.refs.WebAddress.value;
      var Name = this.refs.Name.value;
      var Surname = this.refs.Surname.value;
      var IDNumber = this.refs.IDNumber.value;
      console.log(
CompanyName, "\n" ,
RegistrationNumber, "\n" ,
ServiceCategory, "\n" ,
MainServices, "\n" ,
UnitNumber, "\n" ,
ComplexName, "\n" ,
StreetNumber, "\n" ,
StreetName, "\n" ,
Suburb, "\n" ,
City, "\n" ,
Province, "\n" ,
BusinessType, "\n" ,
ContactNumber1, "\n" ,
ContactNumber2, "\n" ,
EmailAddress, "\n" ,
WebAddress, "\n" ,
Name, "\n" ,
Surname, "\n" ,
IDNumber, "\n"
      );


      var result = this.itemsRef.push({
        CompanyName,
        RegistrationNumber,
        ServiceCategory,
        MainServices,
        UnitNumber,
        ComplexName,
        StreetNumber,
        StreetName,
        Suburb,
        City,
        Province,
        BusinessType,
        ContactNumber1,
        ContactNumber2,
        EmailAddress,
        WebAddress,
        Name,
        Surname,
        IDNumber
      }).then((snap) => {
     this.setState({Success: snap.key});
   });


//console.log(this.refs.ServiceCategory);
      this.refs.CompanyName.value = "";
      this.refs.RegistrationNumber.value = "";
      //this.refs.ServiceCategory.value = "--";
      this.refs.MainServices.value = "";
      this.refs.UnitNumber.value = "";
      this.refs.ComplexName.value = "";
      this.refs.StreetNumber.value = "";
      this.refs.StreetName.value = "";
      this.refs.Suburb.value = "";
      this.refs.City.value = "";
      //this.state.ProvinceCat;
      //this.state.BusinessCat;
      this.refs.ContactNumber1.value = "";
      this.refs.ContactNumber2.value = "";
      this.refs.EmailAddress.value = "";
      this.refs.WebAddress.value = "";
      this.refs.Name.value = "";
      this.refs.Surname.value = "";
      this.refs.IDNumber.value = "";

    },
  render: function(){
    var {Success} = this.state;

  return (
    <form ref="form" onSubmit={this.onSubmit} >
      <div class="callout secondary"><p>Business</p>
        <div class="row">
          <div class="medium-6 columns">
            <input type="text" ref="CompanyName" placeholder="Company Name" class="" />
          </div>
          <div class="medium-6 columns">
            <input type="text" ref="RegistrationNumber" placeholder="Registration Number" class="" />
          </div>
        </div>

        <div class="row">
          <div class="medium-12 columns">
            <label>Service Category
              <select id="ServiceCategory" onChange={this.ServiceChange}>
                <option value="--">--</option>
                <option value="BeeRemoval">Bee Removal</option>
                <option value="Builder">Builder</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Electrician">Electrician</option>
                <option value="GardenServices">Garden Services</option>
                <option value="GlassRepairs">Glass Repairs</option>
                <option value="Handyman">Handyman</option>
                <option value="Painter">Painter</option>
                <option value="PestControl">Pest Control</option>
                <option value="Plumber">Plumber</option>
                <option value="PoolServices">Pool Services</option>
                <option value="Tiler">Tiler</option>
                <option value="TreeFelling">Tree Felling</option>
                <option value="TVTechnician">TV Technician</option>
              </select>
            </label>

            <input type="text" ref="MainServices" placeholder="Main Services" class="" />
          </div>
        </div>
      </div>

      <div class="callout secondary"><p>Address</p>
        <div class="row">
          <div class="medium-3 columns">
            <input type="text" ref="UnitNumber" placeholder="Unit#" class="" />
          </div>
          <div class="medium-9 columns">
            <input type="text" ref="ComplexName" placeholder="Complex Name" class="" />
          </div>
        </div>

        <div class="row">
          <div class="medium-3 columns">
            <input type="text" ref="StreetNumber" placeholder="Street#" class="" />
          </div>
          <div class="medium-9 columns">
            <input type="text" ref="StreetName" placeholder="Street Name" class="" />
          </div>
        </div>

        <div class="row">
          <div class="medium-7 columns">
            <input type="text" ref="Suburb" placeholder="Suburb" class="" />
          </div>
          <div class="medium-5 columns">
            <input type="text" ref="City" placeholder="City/Town" class="" />
          </div>
        </div>

        <div class="row">
          <div class="medium-12 columns">
            <label>Province
              <select id="Province" onChange={this.ProvinceChange}>
                <option value="--">--</option>
                <option value="EasternCape">Eastern Cape</option>
                <option value="FreeState">Free State</option>
                <option value="Gauteng">Gauteng</option>
                <option value="KwaZuluNatal">KwaZulu-Natal</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="NorthernCape">Northern Cape</option>
                <option value="NorthWest">North West</option>
                <option value="WesternCape">Western Cape</option>
              </select>
            </label>

            <div class="row">
              <fieldset class="medium-12 columns" id="BusinessType" onChange={this.BusinessChange}>
                <input type="radio" name="BussinessType" value="Residential" id="residential" required/><label for="residential">Residential</label>
                <input type="radio" name="BussinessType" value="Business" id="business" /><label for="business">Business</label>
              </fieldset>
            </div>

            <div class="row">
              <div class="medium-6 columns">
                <input type="text" ref="ContactNumber1" placeholder="Contact Number 1" class="" />
              </div>
              <div class="medium-6 columns">
                <input type="text" ref="ContactNumber2" placeholder="Contact Number 2" class="" />
              </div>
            </div>
            <div class="row">
              <div class="medium-12 columns">
                <input type="text" ref="EmailAddress" placeholder="Email Address" class="" />
              </div>
            </div>
            <div class="row">
              <div class="medium-12 columns">
                <input type="text" ref="WebAddress" placeholder="Web Address" class="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="callout secondary"><p>Contact</p>
      <div class="row">
        <div class="medium-6 columns">
          <input type="text" ref="Name" placeholder="Name" class="" />
        </div>
        <div class="medium-6 columns">
          <input type="text" ref="Surname" placeholder="Surname" class="" />
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <input type="text" ref="IDNumber" placeholder="ID Number" class="" />
          <input type="text" ref="CopyOfId" placeholder="Copy of ID -- NOT YET LINKED" class="" />
          <input type="text" ref="ProofOfResidence" placeholder="Proof of Residence -- NOT YET LINKED" class="" />
        </div>
      </div>

      <div class="row">
        <div class="medium-12 columns">
          <p>{Success}</p>
        </div>
      </div>
      
      <div class="row">
        <div class="medium-12 columns">
          <button class="button expanded">Add</button>
        </div>
      </div>
    </div>


  </form>

  );
  }
});

module.exports = Form;

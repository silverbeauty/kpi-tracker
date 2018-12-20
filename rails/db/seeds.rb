Doorkeeper::Application.destroy_all
Category.create!([{
  name: "Influencer outreach",
  kpi_period: 7,
  kpi_quantity_goal: 4
},
{
  name: "Facebook posting",
  kpi_period: 7,
  kpi_quantity_goal: 3
},
{
  name: "Influencer backlink exchange",
  kpi_period: 30,
  kpi_quantity_goal: 5
}])
 
p "Created #{Category.count} categories"
Doorkeeper::Application.create(name: "starter_project_web", redirect_uri: "http://localhost:3000/")

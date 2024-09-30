# Vehicle Builder CLI Application

## Walkthrough Video
[Click here to watch the video walkthrough] (https://youtu.be/SVIulAzNmSM)
## Description
The Vehicle Builder is a TypeScript-based command-line interface (CLI) application that allows users to create and interact with different types of vehicles, including cars, trucks, and motorbikes. Users can create vehicles, perform various actions on them such as starting, accelerating, turning, and, for trucks, towing other vehicles, and for motorbikes, performing a wheelie.

## Features
- Create **Cars**, **Trucks**, and **Motorbikes**.
- Perform specific actions based on vehicle type:
  - **Car**: Start, stop, accelerate, turn, and print details.
  - **Truck**: Start, tow vehicles, and perform all general vehicle actions.
  - **Motorbike**: Start, perform a wheelie, and perform all general vehicle actions.
- User-friendly prompts using the **Inquirer** package.
- Command-line interface for easy interaction.

## Installation

To install and run this application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pamar123/VehicleBuilder.git


 **Navigate to the Project Directory**:

 cd VehicleBuilder

**Install Required Dependancies**

 npm install inquirer

**Run Application**

npm start

## Usage

Example Workflow:
**Step 1: Create a Vehicle**

Car Example:
You will be prompted to enter the car's details:
Color: Red
Make: Honda
Model: Civic
Year: 2020
Weight: 2800
Top Speed: 140
Truck Example:
You will be prompted to enter the truck's details:
Color: Blue
Make: Ford
Model: F-150
Year: 2019
Weight: 6000
Top Speed: 120
Towing Capacity: 12000
Motorbike Example:
You will be prompted to enter the motorbike's details:
Color: Black
Make: Harley Davidson
Model: Street 750
Year: 2022
Weight: 500
Top Speed: 110
**Step 2: Perform Actions on the Vehicle**

After creating a vehicle, you will be prompted to select an action:

Start the vehicle: The vehicle will be started.
Accelerate: The vehicle will accelerate by 5 MPH.
Turn left or right: The vehicle will turn left or right.
Stop: The vehicle will stop.
For Trucks:

Tow another vehicle: You can select another vehicle to tow if the truck has enough towing capacity.
For Motorbikes:

Do a wheelie: The motorbike will perform a wheelie.
**Step 3: Print Vehicle Details**

At any time, you can select the "Print details" action to display the vehicle's attributes, including VIN, make, model, year, and specific attributes like towing capacity (for trucks) or number of wheels (for motorbikes).

**Step 4: Exit the Application**

You can select the "Exit" action to quit the application.

Technologies Used

TypeScript: To enforce type safety and structure.
Inquirer: To handle command-line prompts and user input.
Node.js: For building the command-line interface and application logic.


## Video Walkthrough

The video demonstrates:

How to run the application from the command line.
Creating cars, trucks, and motorbikes.
Performing vehicle-specific actions, like towing with a truck and doing a wheelie with a motorbike. 

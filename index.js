class VehicleBrand {
    constructor(name){
        this.name = name;
        this.part = [];
    }
    addPart(part) {
        if(part instanceof Parts){
            this.part.push;
        }else {
            throw new Error(`You can only add an instance of a part. Argument is not a part: ${part}`);
        }
        
    }
}
class Parts {
    constructor(part, quantity) {
        this.part = part;
        this.quantity = quantity;
    }
    describe() {
        return(`We have ${this.quantity} ${this.part}`);
    }
}
class Menu {
    constructor() {
        this.name = [];
        this.selectedBrand = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.addBrand();
                    break;
                case '2':
                    this.viewBrand();
                    break;
                case '3':
                    this.deleteBrand();
                    break;
                case '4':
                    this.displayBrand();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Add a brand
            2) View brands
            3) Delete brand
            4) Display brands
            `);
    }
    showBrandMenuOptions(brandInfo) {
        return prompt(`
            0) Back
            1) Create part
            2) Delete part
            3) Remove from quantity
            --------------
            ${brandInfo}
            `)
    }
    addBrand() {
        let name = prompt('Enter name of new brand:');
        this.name.push(new VehicleBrand(name));
    }
    displayBrand() {
        let brandString = ' ';
        for(let i = 0; i < this.name.length; i++){
            brandString += i + ') ' + this.name[i].name + '\n';
        }
        alert(brandString)
    }
    viewBrand() {
        let index = prompt('Enter the index of the brand you wish to view:');
        if(index > -1 && index < this.name.length) {
            this.selectedBrand = this.name[index];
            let description = 'Brand Name: ' + this.selectedBrand.name + '\n';
            
            for (let i = 0; i<this.selectedBrand.part.length; i++) {
                description += i + ') ' + this.selectedBrand.part[i].describe() + '\n';
            }
            let selection = this.showBrandMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPart();
                    break;
                case '2':
                    this.deletePart();
                    break;
                case '3':
                    this.deleteQuantity();
            }
        }
    }
    deleteBrand() {
         let index = prompt('What brand do you wish to delete:');
         if(index > -1 && index < this.name.length)
            this.name.splice(index, 1)
    }
    createPart() {
        let part = prompt('Enter the name for the new part:');
        let quantity = prompt('Enter the quantity of parts:');
        this.selectedBrand.part.push(new Parts(part, quantity));     
    }
    deletePart(){
        let index = prompt('Enter the index of the part you would like to delete:');
        if (index > -1 && index < this.selectedBrand.part.length) {
            this.selectedBrand.part.splice(index, 1);
        }
    }
    deleteQuantity() {
        let index = prompt('Enter the index of the part you want to remove:');
        let amount = prompt('Enter how many you are removing:');
        if (index > -1 && index < this.selectedBrand.part.length) {
            this.selectedBrand.Part[index].quantity -= amount;
        }
    }

}

let menu = new Menu();
menu.start();
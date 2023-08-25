const textLine = [
  {
    id: 1,
    line: `1. Not all products have a warranty. Only those products for which the warranty period has been declared in kakna bazer' bill/invoice will be covered under the warranty facility till the declared period. The warranty will not be valid according to the warranty mentioned in the product package. It will be valid as per the writing of kakna bazer' bill/invoice. If there is an issue with any product covered by the warranty, the customer will bring it to our nearest service point.`,
  },
  {
    id: 2,
    line: `2. In the case of a Product Lifetime Warranty, it remains valid as long as the manufacturer continues the production of the particular product. If the manufacturer discontinues the production, the warranty will remain valid for as long as one year from the date of purchase`,
  },

  {
    id: 3,
    line: `3. International warranty will be covered only for those products that have an international warranty written on the bill.
     The buyer can claim the international warranty only in the area/country where the manufacturing company has its own service centre.
   If the parts of the product claiming an international warranty are not there in that area/country, then warranty support will not be available.
   In order to claim an international warranty, you must have the original receipt of purchase with the seal/signature of kakna bazer Computers Limited.`,
  },

  {
    id: 5,
    line: `5. We cannot specifically mention how much time is required to complete the repair for the product taken under warranty. It can take 4/5 days or more than 45 days to complete the repair process. The reason is we may have to import the required components.`,
  },
  {
    id: 6,
    line: `6. We can't say precisely how many times you have to claim the warranty for a product within its warranty period`,
  },
  {
    id: 7,
    line: `7. In case of an irreparable product, it will be replaced by another product of the same model`,
  },
  {
    id: 8,
    line: `8. In case of unavailability of products of the same model, the product will be replaced by a product with an equal price from the same or a different brand available to kakna bazer..`,
  },
  {
    id: 9,
    line: `9. The customer will get a refund in case of irreparability and unavailability of products.`,
  },
  {
    id: 10,
    line: `10. "kakna bazer Computers Limited" will not take any responsibility for any loss of data or software during the servicing period. The same policy applies in case of any loss of data or software at the hand of the user. In this case, kakna bazer will not be responsible for restoring or reinstalling any data or software.`,
  },
  {
    id: 11,
    line: `11. Warranty will not be valid for any damages caused by unwary usage, water, free fall, and fire. The warranty will not be valid if the customer opens and tries to open the product on his/her own.`,
  },
  {
    id: 12,
    line: `12. The internal liquid damage or leakage of any product will not be covered by the warranty.`,
  },
  {
    id: 13,
    line: `13. Services such as system setup or operating system customization, during or after the sale, do not come with a warranty`,
  },
  {
    id: 14,
    line: `14. "kakna bazer Computers Limited" does not apply any kind of password or security code during the delivery of laptops, desktops, or any product. The customer must take full responsibility for the BIOS password of laptops, desktops or any other device. It will not be covered by the warranty.`,
  },
  {
    id: 15,
    line: `15. No warranty will be applicable for the mouse, headphones, or accessories provided with any laptop.`,
  },
  {
    id: 16,
    line: `16. "kakna bazer Computers Limited" will set the charges, in consent with the customer, for any services that are not covered by warranty.`,
  },
  {
    id: 17,
    line: `17. Customer must submit original ink/cartridge/toner/ribbon along with printer while claiming warranty of a printer.
`,
  },
  {
    id: 18,
    line: `18. Cartridge, toner, head, roller, drum, element cover, ribbon, and other machinery do not come with a warranty..`,
  },
  {
    id: 19,
    line: `19. If the ribbon, cable, ink pipe, circuit board, etc. inside a printer are physically damaged for any reason, the warranty will be void.`,
  },
  {
    id: 20,
    line: `20. Refill/usage of ink cartridges or toner cartridges not recommended by the manufacturer will void the warranty for Printers.`,
  },
  {
    id: 21,
    line: `21. Claimed printer or photocopier's toner, cartridge, and ink level can be decreased for testing purposes which should be acceptable to the customer.`,
  },
  {
    id: 22,
    line: `22. Fungus or rust on the mainboard, graphics card, and RAM will void the warranty for the particular part or device.`,
  },
  {
    id: 23,
    line: `23. The warranty does not cover graphics cards, which are used for data mining.`,
  },
  {
    id: 24,
    line: `24. A monitor or display with one to three dots is ineligible for warranty claims. A customer can claim a warranty if there are four or more dots`,
  },
  {
    id: 25,
    line: `25. Any scratches on the monitor or display of any devices will void the warranty..`,
  },
  {
    id: 26,
    line: `26. The warranty will not be valid for Motherboards and processors with one or more partially or completely damaged pins.`,
  },
  {
    id: 27,
    line: `27. The free cooling fans provided with the processors do not come with a warranty.`,
  },
  {
    id: 28,
    line: `28. If the serial/sticker of the product is partially or completely removed or damaged, it will no longer be able to claim a warranty.
`,
  },
  {
    id: 29,
    line: `29. In case of damages to the mouse or keyboard purchased as Combo, the whole package with other accessories must be presented while claiming a warranty. One cannot claim a warranty for the keyboard or the mouse separately.`,
  },
  {
    id: 30,
    line: `30. For those routers that come with multiple units/devices and accessories, the warranty must be claimed by submitting the router along with all those included items..`,
  },
  {
    id: 31,
    line: `31. Power adapters, remotes, microphones and cables provided with the printers, scanners, routers, switches, access points, TV cards, speakers, access control, security system and other similar products do not come with a warranty.`,
  },
  {
    id: 32,
    line: `32. In the case of Photocopiers:

  Free installation (inside Dhaka only);
   1-year service warranty (Customer will bear the cost of parts if required);
   the product does not come with a replacement warranty;
 Customers will bear the transportation cost for any service-related issues.
 `,
  },
  {
    id: 33,
    line: `33. If the user writes anything with permanent ink on the product, it will void the warranty`,
  },
  {
    id: 34,
    line: `34. In the case of a GP modem, customers are requested to claim a warranty at Grameenphone Service Center along with the box and warranty card.`,
  },
  {
    id: 35,
    line: `35. In the case of Huawei Tablets, customers are requested to claim the warranty at Huawei Service Center along with the box and warranty card.`,
  },
  {
    id: 36,
    line: `436. In the case of JBL’s products, customers are requested to claim the warranty with the box.`,
  },
  {
    id: 37,
    line: `37. Cables and converters provided with a product do not come with a warranty.`,
  },
  {
    id: 38,
    line: `38. The warranty does not cover any damage to cables provided with a product regardless of a valid product warranty.`,
  },
  {
    id: 39,
    line: `39. In the case of a service warranty, the customer is responsible for collecting parts, if required. If the parts are available in the market, the customer can make an advance payment to kakna bazer and collect the required parts with the help of kakna bazer.`,
  },
  {
    id: 40,
    line: `40. During or after the expiry of the manufacturer’s warranty period, kakna bazer is not liable for any problems, old or new, detected during the free hardware or software tuning services within or after the expiry of the manufacturer’s warranty period.`,
  },
  {
    id: 41,
    line: `41. In the case of the Apple Mac Book, installation of other operating systems (dual boot) deleting MacOS will void the warranty of the product`,
  },
  {
    id: 42,
    line: `42.  Any service related to hardware cleaning will not be considered a free service. (Added point, 28 Dec 2022)`,
  },
];
export default textLine;

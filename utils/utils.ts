export function centsToPriceStringNoUnit(priceCents: number) {
  if (!Number.isInteger(priceCents)) {
    console.error(
      "Price string converter only plays well with integer inputs."
    );
  }

  const priceCentsString = priceCents.toString();
  let finalTwoDigits = "";
  let dollarAmount = "0";

  switch (priceCentsString.length) {
    case 0:
      finalTwoDigits = "00";
      break;
    case 1:
      finalTwoDigits = "0" + priceCentsString;
      break;
    case 2:
      finalTwoDigits = priceCentsString;
      break;
    default:
      finalTwoDigits = priceCentsString.slice(-2);
      dollarAmount = priceCentsString.slice(0, -2);
  }
  return dollarAmount + "." + finalTwoDigits;
}

export function centsToPriceStringWithDollarSign(priceCents: number) {
  return "$" + centsToPriceStringNoUnit(priceCents);
}

// Takes input of form XX.XX where each X is a digit. Returns a number XXXX.
export function priceStringToPriceInCents(priceString: string) {
  const stringParts = priceString.split(".");
  if (stringParts.length != 2) {
    console.error(
      `Received ill-formatted price to convert to cents: ${priceString}`
    );
    return "0000";
  }
  return parseInt(stringParts[0]) * 100 + parseInt(stringParts[1]);
}

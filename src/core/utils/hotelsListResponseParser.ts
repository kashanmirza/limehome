export const hotelsListResponseParser = async (res: any) =>
  res.map((item: any) => ({
    title: item.title,
    uniqueId: item.id,
    address: item.address.label,
    country: item.address.county,
    city: item.address.city,
    latitude: item.position.lat,
    longitude: item.position.lng,
    contact: item.contacts[0].phone[0].value,
    website: item.contacts[0].www[0].value,
  }));

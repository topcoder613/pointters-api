const joi = require('joi');


const workDurationUom = [ 'hour', 'day', 'week' ];

module.exports = joi.object().keys({
    address: joi.object().keys({
          carrierFacility	:joi.string().allow('',null),
          city	:joi.string(),
          company	:joi.string().allow('',null),
          country	:joi.string(),
          email	:joi.string().allow('',null),
          externalId: joi.string().allow('',null),
          federalTaxId	:joi.string().allow('',null),
          mode	:joi.string().allow('',null),
          name	:joi.string().allow('',null),
          object:	joi.string().allow('',null),
          phone	:joi.string().allow('',null),
          residential	:joi.boolean().allow('',null),
          state	:joi.string(),
          stateTaxId	:joi.string().allow('',null),
          street1	:joi.string(),
          street2	:joi.string().allow('',null),
          verify	:joi.string().allow('',null),
          verifyStrict:joi.string().allow('',null),
          zip	:joi.string().allow('',null)
    }),
    buyerId: joi.string().required(),
    currencyCode: joi.string().required(),
    currencySymbol: joi.string().required(),
    description: joi.string().required(),
    fulfillmentMethod: joi.object().keys({
        local: joi.boolean(),
        online: joi.boolean(),
        shipment: joi.boolean(),
        store: joi.boolean(),
        localServiceRadius: joi.number(),
        localServiceRadiusUom: joi.string()
    }).required(),
    location: joi.object().keys({
        city: joi.string(),
        country: joi.string(),
        geoJson: joi.object().keys({
            type: joi.string().required(),
            coordinates: joi.array().items(joi.number()).length(2).required()
        }),
        postalCode: joi.string(),
        province: joi.string(),
        state: joi.string()
    }),
    media: joi.array().items(joi.object().keys({
        fileName: joi.string(),
        mediaType: joi.string().valid([ 'image', 'video', 'document'  ]),
        videoThumbnail: joi.string()
    })),
    parcel: joi.object().keys({
        length: joi.number(),
        width: joi.number(),
        height: joi.number(),
        weight: joi.number()
    }),
    price: joi.number().required(),
    priceWithoutDiscount: joi.number(),
    sellerId: joi.string().required(),
    serviceId: joi.string(),
    workDuration: joi.number().required(),
    workDurationUom: joi.string().valid([ 'hour', 'day', 'week' ]).required()
});

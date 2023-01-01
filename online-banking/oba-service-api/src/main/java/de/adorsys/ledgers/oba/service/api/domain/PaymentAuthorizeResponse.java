/*
 * Copyright 2019-2023 OFIN
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or (at
 * your option) any later version. This program is distributed in the hope that
 * it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 *
 * This project is also available under a separate commercial license. You can
 * contact us at info@ofin.co.
 */

package de.adorsys.ledgers.oba.service.api.domain;

import de.adorsys.ledgers.middleware.api.domain.payment.PaymentTO;
import lombok.Data;

@Data
public class PaymentAuthorizeResponse extends AuthorizeResponse {
    private final PaymentTO payment;
    private String authMessageTemplate;
}

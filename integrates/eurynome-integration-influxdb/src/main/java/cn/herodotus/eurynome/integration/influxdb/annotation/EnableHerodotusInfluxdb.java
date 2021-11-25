/*
 * Copyright (c) 2019-2021 Gengwei Zheng (herodotus@aliyun.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-integration-influxdb
 * File Name: EnableHerodotusInfluxdb.java
 * Author: gengwei.zheng
 * Date: 2021/11/19 15:11:19
 */

package cn.herodotus.eurynome.integration.influxdb.annotation;

import cn.herodotus.eurynome.integration.influxdb.configuration.InfluxdbConfiguration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

/**
 * <p>Description: 开启Influxdb支持 </p>
 *
 * @author : gengwei.zheng
 * @date : 2021/11/19 15:11
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import(InfluxdbConfiguration.class)
public @interface EnableHerodotusInfluxdb {
}
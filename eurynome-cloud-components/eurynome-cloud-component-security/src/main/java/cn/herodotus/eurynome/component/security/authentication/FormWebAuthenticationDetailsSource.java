package cn.herodotus.eurynome.component.security.authentication;

import cn.herodotus.eurynome.component.data.properties.SecurityProperities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationDetailsSource;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

/**
 * <p> Description : TODO </p>
 *
 * @author : gengwei.zheng
 * @date : 2019/11/29 15:49
 */
@Component
public class FormWebAuthenticationDetailsSource implements AuthenticationDetailsSource<HttpServletRequest, WebAuthenticationDetails> {

    @Autowired
    private SecurityProperities securityProperities;

    @Override
    public WebAuthenticationDetails buildDetails(HttpServletRequest request) {
        return new FormWebAuthenticationDetails(request, securityProperities);
    }
}
